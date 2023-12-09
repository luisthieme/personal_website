type User = {
  avatar: string;
  collectionId: string;
  collectionName: string;
  created: string;
  email?: string;
  emailVisibility: boolean;
  id: string;
  name: string;
  updated: string;
  username: string;
  verified: boolean;
};

export default function AdminDashboard(users: any) {
  //any is bad prac pls fix soon

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-white">
              Users
            </h1>
            <p className="mt-2 text-sm text-gray-300">
              A list of all the users currently registered including their name,
              email, user id and status.
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              type="button"
              className="block rounded-md bg-gray-400 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Add user
            </button>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 phone:mx-1">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg border-2">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-transparent">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6 phone:hidden">
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-white phone:hidden">
                        Id
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                        Status
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {users.users.map((user: User) => (
                      <tr key={user.email}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-white sm:pl-6 phone:hidden">
                          {user.name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm phone:text-xs text-gray-200">
                          {user.email}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-200 phone:hidden">
                          {user.id}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm phone:text-xs  text-gray-200">
                          {user.verified ? (
                            <p className="w-fit p-1 border-2 border-green-500 rounded-lg text-green-500">
                              Verified
                            </p>
                          ) : (
                            <p className="w-fit p-1 border-2 border-red-500 rounded-lg text-red-500">
                              Not Verified
                            </p>
                          )}
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm phone:text-xs font-medium sm:pr-6">
                          <a
                            href="#"
                            className="text-indigo-600 hover:text-indigo-900">
                            Edit<span className="sr-only">, {user.name}</span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
