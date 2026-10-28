import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { useTodo } from "../context/useTodo";

const Groups = () => {
  const { groups, addGroup, deleteGroup } = useTodo();
  const [groupName, setGroupName] = useState("");

  const handleAddGroup = (e) => {
    e.preventDefault();
    addGroup(groupName);
    setGroupName("");
  };

  const handleDeleteGroup = (e, groupId) => {
    e.preventDefault();
    e.stopPropagation();
    if (window.confirm("Delete this group and all its tasks?")) {
      deleteGroup(groupId);
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Task Groups / Categories
          </h1>

          <form onSubmit={handleAddGroup} className="flex flex-col sm:flex-row gap-2 mb-6">
            <input
              type="text"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              placeholder="Enter group name..."
              className="w-full sm:flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Create Group
            </button>
          </form>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {groups.map((group) => (
              <div key={group.id} className="relative">
                <Link
                  to={`/groups/${group.id}`}
                  className="block bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-md transition-all"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 pr-6">
                    {group.name}
                  </h3>
                  <p className="text-blue-600 text-sm">View tasks</p>
                </Link>
                <button
                  onClick={(e) => handleDeleteGroup(e, group.id)}
                  className="absolute top-2 right-2 text-gray-400 hover:text-red-600 transition-colors"
                  title="Delete group"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Groups;
