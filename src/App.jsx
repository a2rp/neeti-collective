import { Styled } from "./App.styled";
import AppFooter from "./components/appFooter";
import AppHeader from "./components/appHeader";
import GoToTop from "./components/goToTop";
import AppRoutes from "./AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    return (
        <>
            <Styled.Wrapper>
                <AppHeader />
                <Styled.Main>
                    <AppRoutes />
                </Styled.Main>
                <AppFooter />
                <GoToTop />
            </Styled.Wrapper>
            <ToastContainer
                position="bottom-center"
                autoClose={2200}
                hideProgressBar
            />
        </>
    );
};

export default App;
