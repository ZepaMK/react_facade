import Users from "../components/user_management/user_management_with_facade/Users";

export default function Facade() {
  return (
    <div>
      <div className="py-4 px-16">
        <h1 className="text-[1.5rem] font-semibold">
          User management with the façade pattern
        </h1>
        <div className="h-[1px] bg-black w-full" />
        <p className="w-1/2 italic">
          This section contains a example of a user management systeem with the
          use of a façade pattern. Only a part of the code used building this
          application is shown on this page, the rest of the code can be found{" "}
          <a
            className="underline text-blue-600"
            href="https://github.com/ZepaMK/react_facade/tree/main/components"
          >
            here
          </a>
          . In the report the code will be compared to the code used without a
          façade pattern. The output can be found below so go ahead and test it!
        </p>
        <div>
          <Users />
        </div>
      </div>
    </div>
  );
}
