import Wrapper from "../Wrapper";
import { useMemo } from "react";
import Breadcrumb from "../BreadCrumb";
import KnowledgeBasePublicSection from "./KnowledgeBasePublicSection";
import KnowledgeBasePublicNoAnswer from "./KnowledgeBasePublicNoAnswer";
import KnowledgeBasePublicArticle from "./KnowledgeBasePublicArticle";
import Loader from "../Loader";

const KnowledgeBasePublicContent = ({ item, isLoading }) => {
  const group = useMemo(() => {
    return item?.group || item?.parents?.[0].group;
  }, [item]);

  return (
    <Wrapper>
      <div className="flex flex-col min-h-screen md:min-h-full">
        <div className="bg-snu-purple-900 ">
          <div className="h-full wrapper">
            <Breadcrumb parents={item?.parents || []} path="/base-de-connaissance" />
            <div className="py-4">
              {<h5 className="text-snu-purple-100 max-w-3xl pb-2 text-base md:text-lg uppercase">{group}</h5>}
              <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">{item?.title}</h1>
              <h6 className="text-snu-purple-100 text-base md:text-lg lg:text-xl">{item?.description}</h6>
            </div>
          </div>
        </div>
        {!item || isLoading ? (
          <Loader className="mt-auto h-full border-2 flex-grow" />
        ) : (
          <>
            {item.type === "article" && <KnowledgeBasePublicArticle item={item} />}
            {item.type === "section" && <KnowledgeBasePublicSection item={item} />}
            <KnowledgeBasePublicNoAnswer />
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default KnowledgeBasePublicContent;
