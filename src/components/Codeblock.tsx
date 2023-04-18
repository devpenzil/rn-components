import React from "react";

function Codeblock() {
  return (
    <div className="border-[0.5px] border-slate-200 rounded my-8">
      <div className="bg-white p-4 rounded-md">index.js </div>
      <div className="h-96 bg-gray-400 p-4 rounded-b overflow-y-scroll">
        <pre>
          <code>
            {`
                import React from "react";

                function Codeblock() {
                return (
                    <div className="border-[0.5px] border-slate-200 rounded">
                    <div className="bg-white p-4 rounded-md">index.js </div>
                    <div className="h-96 bg-gray-400 p-4 rounded-b overflow-y-scroll">
                        hgsjhs
                    </div>
                    </div>
                );
                }

                export default Codeblock;
                import React from "react";

                function Codeblock() {
                return (
                    <div className="border-[0.5px] border-slate-200 rounded">
                    <div className="bg-white p-4 rounded-md">index.js </div>
                    <div className="h-96 bg-gray-400 p-4 rounded-b overflow-y-scroll">
                        hgsjhs
                    </div>
                    </div>
                );
                }

                export default Codeblock;
`}
          </code>
        </pre>
      </div>
    </div>
  );
}

export default Codeblock;
