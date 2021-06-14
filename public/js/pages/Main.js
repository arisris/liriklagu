import { useState, useEffect } from "preact/hooks";
import Layout from "../components/Layout";
import { SegmentList } from "../components/Lirik";

export default () => {
	useEffect(() => {
		document.title = "Home Page";
	}, [])
	return (
		<Layout>
			<h1>Hello World</h1>
		</Layout>
	);
};
