import { BaseRecord, DataProvider, GetListParams, GetListResponse } from "@refinedev/core";
import {mockSubjects} from "@/constants/mock-data.ts";


export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({
                                                           resource,
                                                         }: GetListParams): Promise<GetListResponse<TData>> => {
    if (resource === "subjects") {
      return {
        data: mockSubjects as unknown as TData[],
        total: mockSubjects.length,
      };
    }
    return { data: [] as TData[], total: 0 };
  },

  getOne: async () => { throw new Error("Not implemented"); },
  create: async () => { throw new Error("Not implemented"); },
  update: async () => { throw new Error("Not implemented"); },
  deleteOne: async () => { throw new Error("Not implemented"); },
  getApiUrl: () => "",
};