import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import ArchivePage from "./pages/ArchivePage";
import DetailPage from "./pages/DetailPage";
import PageNotFound from "./pages/PageNotFound";
import AuthNavbar from "./components/AuthNavbar";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { getUserLogged, putAccessToken } from "./utils/api";
import { ThemeProvider } from "./contexts/ThemeContext";
import ToggleContexts from "./components/ToggleContexts";
import { LocaleProvider } from "./contexts/LocaleContext";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
      themeContext: {
        theme: localStorage.getItem("theme") || "light",
        toggleTheme: () => {
          this.setState((prevState) => {
            const newTheme = prevState.themeContext.theme === "light" ? "dark" : "light";
            localStorage.setItem("theme", newTheme);
            return {
              themeContext: {
                ...prevState.themeContext,
                theme: newTheme
              },
            };
          });
        },
      },
      localeContext: {
        locale: 'id',
        toggleLocale: () => {
          this.setState((prevState) => {
            return {
              localeContext: {
                ...prevState.localeContext,
                locale: prevState.localeContext.locale === 'id' ? 'en' : 'id'
              }
            }
          })
        }
      },
    }

    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
      };
    });
  }

  onLogout() {
    this.setState(() => {
      return {
        authedUser: null
      }
    });
    putAccessToken("");
  }

  async componentDidMount() {
    document.documentElement.setAttribute('data-theme', this.state.themeContext.theme);
    const { data } = await getUserLogged();
    this.setState(() => {
      return {
        authedUser: data,
        initializing: false,
      };
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.themeContext.theme !== this.state.themeContext.theme) {
      document.documentElement.setAttribute("data-theme", this.state.themeContext.theme);
    }
  }

  render() {
    if (this.state.initializing) {
      return <p className="loading">Loading ...</p>;
    }

    if (this.state.authedUser === null) {
      return (
        <LocaleProvider value={this.state.localeContext}>
          <ThemeProvider value={this.state.themeContext}>
            <header className="note-app__header">
              <AuthNavbar />
            </header>
            <main>
              <Routes>
                <Route path="/*" element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            </main>

            <ToggleContexts />
          </ThemeProvider>
        </LocaleProvider>
      )
    }

    return (
      <LocaleProvider value={this.state.localeContext}>
        <ThemeProvider value={this.state.themeContext}>
          <header className="note-app__header">
            <Navbar logout={this.onLogout} />
          </header>
          <main className="note-app__body">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/add" element={<AddPage />} />
              <Route path="/archive" element={<ArchivePage />} />
              <Route path="/notes/:id" element={<DetailPage />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>

            <ToggleContexts />
          </main>
        </ThemeProvider>
      </LocaleProvider>
    );
  }
}

export default App;
