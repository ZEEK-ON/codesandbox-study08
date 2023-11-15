// import { BrowserRouter, Router } from "react-router-dom";
// import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
// import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
// import { SearchInput } from "./components/molecules/SearchInput";
// import { UserCard } from "./components/organisms/user/UserCard";
// import { DefaultLayout } from "./components/templates/DefaultLayout";
// import { HeaderOnly } from "./components/templates/HeaderOnly";
import { RecoilRoot } from "recoil";
import { UserProvider } from "./providers/UserProvider";
import { Router } from "./router/Router";
import "./styles.css";

// const user = {
//   name: "イワシ",
//   image: "https://source.unsplash.com/NE0XGVKTmcA",
//   email: "12345@example.com",
//   phone: "090-1111-1111",
//   company: {
//     name: "テスト株式会社",
//   },
//   website: "https://google.com",
// };

export default function App() {
  return (
    <RecoilRoot>
      <UserProvider>
        <Router />
      </UserProvider>
    </RecoilRoot>
    // <BrowserRouter>
    //   <DefaultLayout>
    //     <PrimaryButton>テスト</PrimaryButton>
    //     <SecondaryButton>検索</SecondaryButton>
    //     <br />
    //     <SearchInput />
    //     <UserCard user={user} />
    //   </DefaultLayout>
    // </BrowserRouter>
  );
}
