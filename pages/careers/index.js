import { useRouter } from "next/router";

import Card from "../../components/Card";
import Search from "../../components/Search";

export default function Jobs() {
  const router = useRouter();
  const {jobId} = router.query;
  console.log(router);

  return (
    <>
      <Card />
      <Search />
    </>
  );
}
