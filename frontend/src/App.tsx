import { GitHubBanner, Refine, WelcomePage } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import routerProvider, {
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from "@refinedev/react-router";
import {BrowserRouter, Outlet, Route, Routes} from "react-router";
import "./App.css";
import { Toaster } from "./components/refine-ui/notification/toaster";
import { useNotificationProvider } from "./components/refine-ui/notification/use-notification-provider";
import { ThemeProvider } from "./components/refine-ui/theme/theme-provider";
import { dataProvider } from "./providers/data";
import Dashboard from "@/pages/dashboard.tsx";
import {Layout} from "@/components/refine-ui/layout/layout.tsx";
import {Home} from "lucide-react";
import SubjectsList from "@/pages/subjects/list.tsx";

function SubjectsCreate() {
    return null;
}

function App() {
  return (
    <BrowserRouter>
      <GitHubBanner />
      <RefineKbarProvider>
        <ThemeProvider>
          <DevtoolsProvider>
            <Refine
                dataProvider={dataProvider}
              notificationProvider={useNotificationProvider()}
              routerProvider={routerProvider}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                projectId: "0K2FZL-s3eqRm-NSPSZg",
              }}
              resources = {[
                  {
                      name: 'dashboard', list: '/', meta: { label: 'Home', icon: <Home />}
                  }
              ]}
            >
              <Routes>
                <Route index element={<Dashboard />} />

                  <Route element={
                      <Layout>
                          <Outlet/>
                      </Layout>
                  }>
                      <Route path="/" element={<Dashboard />} />
                  </Route>

                  <Route path="subjects">
                      <Route index element={<SubjectsList />} />
                      <Route path= "create" element={<SubjectsCreate />} />
                  </Route>
              </Routes>
              <Toaster />
              <RefineKbar />
              <UnsavedChangesNotifier />
              <DocumentTitleHandler />
            </Refine>
            <DevtoolsPanel />
          </DevtoolsProvider>
        </ThemeProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
