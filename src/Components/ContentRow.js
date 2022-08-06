import { useState} from "react";

export const ContentRow = (props) => {
  const [name,setName]=useState("Sajib");

  const click=()=>{
    setName("Sarwer");

  }

  return (
                // {/* <!-- Begin Page Content --> */}
                <div class="container-fluid">

                    {/* <!-- Page Heading --> */}
                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">{}</h1>
                        <button onClick={click}>Click</button>
                        <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i> {props.title}</a>
                    </div>

                    

                </div>
                // {/* <!-- /.container-fluid --> */}

            
  );
};
