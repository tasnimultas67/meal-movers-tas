// app/protected/page.js
import withAuth from "../../components/withAuth";

function ProtectedPage() {
  return <div>Admin Protected Content</div>;
}

export default withAuth(ProtectedPage, "admin"); // Specify required role if needed
