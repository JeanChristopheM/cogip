import { Suspense } from "react";
const SuspenseProvider = ({ element }) => {
  return (
    <Suspense
      fallback={
        <main>
          <div className="fetching">
            <div className="lds-dual-ring"></div>
          </div>
        </main>
      }
    >
      {element}
    </Suspense>
  );
};
export default SuspenseProvider;
