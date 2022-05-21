import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import NotFound from "../../components/NotFound";
import Info from "../../components/user/Info";

const User = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const router = useRouter();
  const { name: username } = router.query;
  useEffect(() => {
    console.log(username);
    if (username) {
      axios
        .get(`https://api.github.com/users/${username}`)
        .then(async (res) => {
          setIsLoading(false);
          console.log(res.data);
        })
        .catch((err) => {
          setIsLoading(false);
          setIsError(true);
          console.log(err);
        });
    }
  }, [router.isReady, username]);
  return (
    <>
      {isLoading && <Loading />}
      <main className="flex justify-center border-t-2">
        {isError ? (
          <NotFound />
        ) : (
          <>
            <div></div>
          </>
        )}
      </main>
    </>
  );
};

export default User;
