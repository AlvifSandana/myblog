import Layout from "../components/layout";
import Sidebar from "../components/sidebar";
import Menu from "../data-dummy/menu.json";

export default function Search({props}) {
  return (
    <Layout LayoutProps = {props.menu}>
      <div className="row">
        <div className="col-md-8">
          <h3 className="pb-4 mb-4 fst-italic border-bottom">
            Search Page
          </h3>
          <form action="">
              <div className="form-group">
                  <label htmlFor="">Isikan kata kunci disini</label>
                  <input className="form-control" type="text"/>
                </div>
          </form>
        </div>
        <Sidebar />
      </div>
    </Layout>
  );
}

Search.getInitialProps = () => {
  return {
    props: {
      menu: Menu
    }
  }
}
