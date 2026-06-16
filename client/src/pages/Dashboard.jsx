// import { Plus } from 'lucide-react'
// import { useState } from 'react'
// import StatsGrid from '../components/StatsGrid'
// import ProjectOverview from '../components/ProjectOverview'
// import RecentActivity from '../components/RecentActivity'
// import TasksSummary from '../components/TasksSummary'
// import CreateProjectDialog from '../components/CreateProjectDialog'

// const Dashboard = () => {

//     const user = { fullName: 'User' }
//     const [isDialogOpen, setIsDialogOpen] = useState(false)

//     return (
//         <div className='max-w-6xl mx-auto'>
//             <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 ">
//                 <div>
//                     <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-1"> Welcome back, {user?.fullName || 'User'} </h1>
//                     <p className="text-gray-500 dark:text-zinc-400 text-sm"> Here's what's happening with your projects today </p>
//                 </div>

//                 <button onClick={() => setIsDialogOpen(true)} className="flex items-center gap-2 px-5 py-2 text-sm rounded bg-gradient-to-br from-blue-500 to-blue-600 text-white space-x-2 hover:opacity-90 transition" >
//                     <Plus size={16} /> New Project
//                 </button>

//                 <CreateProjectDialog isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} />
//             </div>

//             <StatsGrid />

//             <div className="grid lg:grid-cols-3 gap-8">
//                 <div className="lg:col-span-2 space-y-8">
//                     <ProjectOverview />
//                     <RecentActivity />
//                 </div>
//                 <div>
//                     <TasksSummary />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Dashboard

import { Plus } from "lucide-react";
import { useState } from "react";

import StatsGrid from "../components/StatsGrid";
import ProjectOverview from "../components/ProjectOverview";
import RecentActivity from "../components/RecentActivity";
import TasksSummary from "../components/TasksSummary";
import CreateProjectDialog from "../components/CreateProjectDialog";

const Dashboard = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const user = {
    fullName: "User",
  };

  return (
    <section className="mx-auto max-w-6xl">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-1">
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Welcome back, {user?.fullName ?? "User"}
          </h1>

          <p className="text-sm text-gray-500 dark:text-zinc-400">
            Here's what's happening with your projects today
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsDialogOpen(true)}
          className="flex items-center gap-2 rounded px-5 py-2 text-sm text-white bg-gradient-to-br from-blue-500 to-blue-600 transition-opacity hover:opacity-90"
        >
          <Plus size={16} />
          <span>New Project</span>
        </button>
      </div>

      <CreateProjectDialog
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
      />

      <StatsGrid />

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          <ProjectOverview />
          <RecentActivity />
        </div>

        <aside>
          <TasksSummary />
        </aside>
      </div>
    </section>
  );
};

export default Dashboard;
