import Layout from "../components/Layout";

const Guide = () => {
  return (
    <Layout>
      <div className="space-y-6 ">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Instructions / User Guide
          </h1>

          <div className="space-y-6">
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">
                How to Create a Task Group
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Navigate to the "Groups" page from the navigation menu</li>
                <li>Enter a name for your new group in the input field</li>
                <li>Click the "Create Group" button</li>
                <li>Your new group will appear in the groups list</li>
              </ol>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">
                How to Add a Task to a Selected Group
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Go to the "Groups" page and click on the group you want to add a task to</li>
                <li>You'll be taken to the group's task list page</li>
                <li>Enter your task in the input field</li>
                <li>Click "Add Task" or press Enter</li>
                <li>The task will appear in that group's task list</li>
              </ol>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">
                How to Mark a Task as Done or Not Done
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Find the task you want to update in your task list</li>
                <li>Click the "Mark Done" button to mark it as completed</li>
                <li>Click the "Mark Not Done" button to revert it back to pending</li>
                <li>The status indicator will change accordingly</li>
              </ol>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">
                How to Delete a Task
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Locate the task you want to remove</li>
                <li>Click the "Delete" button next to the task</li>
                <li>The task will be permanently removed from the list</li>
              </ol>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">
                How to Navigate Between Pages and Task Groups
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Use the navigation bar at the top to move between pages</li>
                <li>Click "Dashboard" for an overview of your tasks</li>
                <li>Click "Todo List" to manage all tasks in one place</li>
                <li>Click "Groups" to view and manage task groups</li>
                <li>Click on any group to view its specific tasks</li>
                <li>Click "Guide" for this user guide</li>
                <li>Click "Developers" to see project contributors</li>
                <li>Use the "Back to Groups" button to return to the groups page</li>
              </ol>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Guide;
