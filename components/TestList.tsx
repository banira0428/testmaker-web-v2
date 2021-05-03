import Button from "./Button";
import ItemTest from "./ItemTest";
import CreateTestDialog from "./CreateTestDialog";
import { Test } from "../lib/resources/test";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./authContext";
import {
  fetchPagedTests,
  PagedTests,
} from "../lib/services/firestore";
import { QueryDocumentSnapshot } from "@firebase/firestore-types";
import { SelectedTestContext } from "./contexts/TestContext";
import { TestsContext } from './contexts/TestsContext';

export default function TestList() {
  const { currentUser } = useContext(AuthContext);
  const { selectedTest, setSelectedTest } = useContext(SelectedTestContext);
  const {tests, setTests} = useContext(TestsContext);

  const [cursor, setCursor] = useState<QueryDocumentSnapshot>();
  const [isLastPage, setIsLastPage] = useState<boolean>(false);

  const [isShowCreateTestDialog, setIsShowCreateTestDialog] = useState<boolean>(
    false
  );

  const buildItemModels = () => {
    if (currentUser == null || currentUser == undefined) return;
    fetchPagedTests(currentUser.uid, cursor).then((result: PagedTests) => {
      setTests(tests.concat(result.tests));
      setCursor(result.cursor);
      if (cursor && cursor.id == result.cursor.id) {
        setIsLastPage(true);
      }
    });
  };

  useEffect(() => {
    buildItemModels();
  }, [currentUser]);

  return (
    <div>
      <div className="flex justify-items-center">
        <h3 className="text-2xl md:text-3xl font-bold  mr-auto ml-0 mt-5 mb-3">
          問題集一覧
        </h3>
        <div className="flex-glow-1" />
        <div className="my-auto">
          <Button
            title={"+ 新規作成"}
            onClick={() => {
              setIsShowCreateTestDialog(true);
            }}
            theme={"accent"}
          />
        </div>
      </div>
      {tests && tests.map((test: Test) => (
        <div key={test.documentId}>
          <ItemTest
            test={test}
            onClick={() => {
              setSelectedTest(test);
            }}
          />
        </div>
      ))}
      <div className="w-full text-center mt-5">
        {tests && tests.length > 0 && !isLastPage && (
          <Button
            title={"もっと見る"}
            onClick={() => {
              buildItemModels();
            }}
            theme={"primary"}
          />
        )}
      </div>
      <CreateTestDialog
        isShow={isShowCreateTestDialog}
        setIsShow={setIsShowCreateTestDialog}
        onCreateTest={(test) => {
          setTests([test].concat(tests));
        }}
      />
    </div>
  );
}
