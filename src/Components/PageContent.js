import { ContentRow } from "./ContentRow";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const PageContent = () => {

  const name ="sarwer"
  return (
    <div id="content-wrapper" class="d-flex flex-column">
      {/* <!-- Main Content --> */}
      <div id="content">
        <Header />


        <ContentRow nm ={name} title="ghffh"/>




      </div>
      <Footer />
    </div>
  );
};
