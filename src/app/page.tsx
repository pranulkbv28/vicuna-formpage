import { ProfileForm } from "@/components/FormComponent";
import SideComponent from "@/components/SideComponent";
import styles from "@/styles/app.module.css";

export default function Home() {
  return (
    <main className={`flex min-h-screen items-center p-24 ${styles.body}`}>
      {/* <h1 className="text-3xl">Welcome to Next</h1> */}
      <div>
        <SideComponent />
      </div>
      <div>
        <ProfileForm />
      </div>
    </main>
  );
}
