import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { useTodo } from "../context/useTodo";

const Groups = () => {
  const { groups, addGroup } = useTodo();
  const [groupName, setGroupName] = useState("");

  const handleAddGroup = (e) => {
    e.preventDefault();
    addGroup(groupName);
    setGroupName("");
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Task Groups / Categories
          </h1>

          <form onSubmit={handleAddGroup} className="flex gap-2 mb-6">
            <input
              type="text"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              placeholder="Enter group name..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Create Group
            </button>
          </form>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {groups.map((group) => (
              <Link
                key={group.id}
                to={`/groups/${group.id}`}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {group.name}
                </h3>
                <p className="text-blue-600 text-sm">View tasks</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Groups;
