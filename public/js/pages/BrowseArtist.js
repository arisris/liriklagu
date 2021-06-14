import Layout from "../components/Layout";
import { SegmentList } from "../components/Lirik";

export default ({ params: { segment, page } }) => {
	return (
		<Layout>
			<SegmentList segment={segment} page={page} />
		</Layout>
	);
};
