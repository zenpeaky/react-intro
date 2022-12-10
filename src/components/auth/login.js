export default function Login() {
  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-8 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white h-full py-12 px-8 shadow sm:rounded-xl sm:px-10">
            <div className="sm:mx-auto sm:w-full sm:max-w-md mb-8">
              <img
                className="mx-auto h-12 w-auto"
                src="bprkancana.png"
                alt="BPRKancana"
              />
            </div>
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-3 relative rounded-lg">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fa-solid fa-envelope text-indigo-300"></i>
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="focus:ring-indigo-200 focus:border-indigo-200 block w-full pl-10 py-3 pr-3 sm:text-sm border-indigo-200 rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="relative mt-3 rounded-lg">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fa-solid fa-key text-indigo-300"></i>
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full pl-10 pr-3 py-3 border border-indigo-200 rounded-lg focus:outline-none focus:ring-indigo-200 focus:border-indigo-200 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center mt-12 p-3 border border-transparent rounded-lg text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <i className="fa-solid fa-arrow-right-to-arc mr-3 pt-1"></i>
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
