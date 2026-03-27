import { createDataProvider, CreateDataProviderOptions } from "@refinedev/rest";
import { CreateResponse, ListResponse } from "@/types";
import { BACKEND_BASE_URL } from "@/constants";

import {createDataProvider, CreateDataProviderOptions} from "@refinedev/rest";
import {CreateResponse, GetOneResponse, ListResponse} from "@/types";
import {BACKEND_BASE_URL} from "@/constants";

// NOTE: This file defines the options object that can be provided to
// `createDataProvider(options)` so that refine knows how to build requests and
// interpret responses for list queries.
//
// Currently we only define the `getList` behavior:
// - `getEndpoint`: how to resolve the URL path for a given resource
// - `mapResponse`: how to extract the array of records from the raw `fetch` Response
// - `getTotalCount`: how to calculate the total number of records (for pagination)
//

// Create endpoints configuration for list fetching
const options: CreateDataProviderOptions = {
  getList: {
    getEndpoint: ({ resource }) => resource,

    mapResponse: async (response) => {
      const payload: ListResponse = await response.clone().json();
      return payload.data ?? [];
    },

    getTotalCount: async (response) => {
      const payload: ListResponse = await response.json();
      return payload.pagination?.total ?? payload.data?.length ?? 0;
    },

    buildQueryParams: async ({ resource, pagination, filters }) => {
      const page = pagination?.currentPage ?? 1;
      const pageSize = pagination?.pageSize ?? 10;

      const params: Record<string, string | number> = { page, limit: pageSize };

      filters?.forEach((filter) => {
        const field = "field" in filter ? filter.field : "";
        const value = String(filter.value);

        // Role filter — applies to any resource (e.g. /departments/:id/users?role=professor)
        if (field === "role") {
          params.role = value;
        }

        // --- Per-resource search mappings ---

        if (resource === "departments") {
          if (field === "name" || field === "code") params.search = value;
        }

        if (resource === "users") {
          if (field === "search" || field === "name" || field === "email") {
            params.search = value;
          }
        }

        if (resource === "subjects") {
          if (field === "department") params.department = value;
          if (field === "name" || field === "code") params.search = value;
        }

        if (resource === "classes") {
          if (field === "name") params.search = value;
          if (field === "subject") params.subject = value;
          if (field === "professor") params.professor = value;
        }
      });

      return params;
    },
  },

  create: {
    getEndpoint: ({ resource }) => resource,

    buildBodyParams: async ({ variables }) => variables,

    mapResponse: async (response) => {
      const json: CreateResponse = await response.json();
      return json.data ?? {};
    },
  },
};
    }
  },
  //Get details of a single resource. Eg- class.
  getOne: {
    getEndpoint: ({ resource, id }) => `${resource}/${id}`,

    mapResponse: async (response) => {
      const json: GetOneResponse = await response.json();

      return json.data ?? null;
    }
  }

}


const { dataProvider } = createDataProvider(BACKEND_BASE_URL, options);

export { dataProvider };