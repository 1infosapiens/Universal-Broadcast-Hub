import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Layout } from "@/components/layout";
import Home from "@/pages/home";
import About from "@/pages/about";
import CreativeArtsSchool from "@/pages/schools/creative-arts";
import ModelingDept from "@/pages/departments/modeling";
import MusicDept from "@/pages/departments/music";
import DanceDept from "@/pages/departments/dance";
import FilmTheatreDept from "@/pages/departments/film-theatre";
import Faculty from "@/pages/faculty";
import Library from "@/pages/library";
import Partners from "@/pages/partners";
import Students from "@/pages/students";
import Contact from "@/pages/contact";
import Programmes from "@/pages/programmes";

import LawProgramme from "@/pages/programmes/law";
import PsychologyProgramme from "@/pages/programmes/psychology";
import ProjectManagementProgramme from "@/pages/programmes/project-management";
import CommunicationProgramme from "@/pages/programmes/communication";
import EntrepreneurshipProgramme from "@/pages/programmes/entrepreneurship";
import PoliticsProgramme from "@/pages/programmes/politics";
import StrategicStudiesProgramme from "@/pages/programmes/strategic-studies";

import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />

        {/* Schools */}
        <Route path="/schools/creative-arts" component={CreativeArtsSchool} />

        {/* Creative Arts Departments */}
        <Route path="/departments/modeling" component={ModelingDept} />
        <Route path="/departments/music" component={MusicDept} />
        <Route path="/departments/dance" component={DanceDept} />
        <Route path="/departments/film-theatre" component={FilmTheatreDept} />

        {/* Programmes listing */}
        <Route path="/programmes" component={Programmes} />

        {/* Individual Programme Pages */}
        <Route path="/programmes/law" component={LawProgramme} />
        <Route path="/programmes/psychology" component={PsychologyProgramme} />
        <Route path="/programmes/project-management" component={ProjectManagementProgramme} />
        <Route path="/programmes/communication" component={CommunicationProgramme} />
        <Route path="/programmes/entrepreneurship" component={EntrepreneurshipProgramme} />
        <Route path="/programmes/politics" component={PoliticsProgramme} />
        <Route path="/programmes/strategic-studies" component={StrategicStudiesProgramme} />

        {/* Other Pages */}
        <Route path="/faculty" component={Faculty} />
        <Route path="/library" component={Library} />
        <Route path="/partners" component={Partners} />
        <Route path="/students" component={Students} />
        <Route path="/contact" component={Contact} />

        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
