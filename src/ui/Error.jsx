import { useRouteError } from "react-router-dom";

import LinkButton from "./LinkButton";

function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="mt-40 flex justify-center">
      <div className="flex-col">
        <h1 className="rounded-md bg-stone-200 px-5 py-3 text-4xl shadow-md">
          Something went wrong 😢
        </h1>
        <p className="mx-20 my-5 text-2xl">{error.data || error.message}</p>
        <div className="text-center">
          <LinkButton to="-1">&larr; Go back</LinkButton>
        </div>
      </div>
    </div>
  );
}

export default Error;
