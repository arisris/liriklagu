import { render } from "preact";
import { Switch, Router, Route } from "wouter-preact";
import PageMain from "./pages/Main";
import PageNotFound from "./pages/NotFound";
import BrowseArtist from "./pages/BrowseArtist";
import ArtistDetail from "./pages/ArtistDetail";
import SongDetail from "./pages/SongDetail";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" component={PageMain} />
				<Route basePath="/browse" path="/browse/:segment/:page?" component={BrowseArtist} />
				<Route basePath="/artist" path="/artist/:segment*" component={ArtistDetail} />
				<Route basePath="/song" path="/song/:segment*" component={SongDetail} />
				<Route path="/:err*" component={PageNotFound} />
			</Switch>
		</Router>
	);
};

render(<App />, document.getElementById("root"));

if (module.hot) {
	//module.hot.accept(App);
}
