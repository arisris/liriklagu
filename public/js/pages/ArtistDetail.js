import Layout from "../components/Layout";
import { SegmentSongList } from "../components/Lirik";

export default ({ params: { segment } }) => {
	return (
		<Layout>
			<SegmentSongList segment={segment} />
		</Layout>
	);
};
