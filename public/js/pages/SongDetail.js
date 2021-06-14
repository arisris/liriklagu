import Layout from "../components/Layout";
import { SegmentSongDetail } from "../components/Lirik";

export default ({ params: { segment } }) => {
	return (
		<Layout>
			<SegmentSongDetail segment={segment} />
		</Layout>
	);
};
