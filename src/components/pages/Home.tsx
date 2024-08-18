import React, { useState } from "react";
import Nav from "../common/Nav";
import Frame from "../../assets/Frame.svg";
import { Button } from "../ui/button";
import Modal from "../common/Modal";
import QueryBuilder from "./Query";
import { RuleGroup } from "@/lib/interface";
import { getQueryString } from "@/lib/utils";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [ruleGroup, setRuleGroup] = useState<RuleGroup>({
    children: [],
    conjunction: "AND",
    not: false,
    type: "rule_group",
  });

  const handleResetRuleGroup = () => {
    setRuleGroup({
      children: [],
      conjunction: "AND",
      not: false,
      type: "rule_group",
    });
  };

  const [isExpanded, setIsExpanded] = useState(false);
  const queryString = getQueryString(ruleGroup);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-[#14161a] h-screen font-inter">
      <Nav />
      <div className="px-20 py-20">
        <div className="flex flex-col">
          <div className="flex gap-2">
            <img src={Frame} alt="Frame" />
            <span className="text-[#FFFFFF] font-medium">Build your query</span>
          </div>
          <span className="text-[#FFFFFF66] text-xs font-medium">
            Narrow your search further by
            <br /> adding some filters.
          </span>
        </div>
        <Button className="mt-4" onClick={() => setOpenModal(!openModal)}>
          Build query
        </Button>
        {openModal ? (
          <Modal
            isOpen={openModal}
            onClose={() => {
              setOpenModal(false);
              handleResetRuleGroup();
            }}
            header={
              !getQueryString(ruleGroup)
                ? "Create tag and query"
                : "Build your query"
            }
            headerDesc={
              !getQueryString(ruleGroup) ? (
                "The query you build will be saved in your active view"
              ) : (
                <div className="flex items-center gap-5">
                  <div className="p-2 rounded bg-[#4338CA] text-white flex items-center gap-1 max-w-[762px]">
                    <span className="font-bold">Query:</span>
                    <span
                      className={`${
                        isExpanded
                          ? "whitespace-normal"
                          : "whitespace-nowrap overflow-hidden"
                      }`}
                    >
                      {queryString}
                    </span>
                  </div>
                  {queryString.length > 100 && (
                    <button
                      onClick={toggleExpand}
                      className="focus:outline-none font-medium text-white"
                    >
                      {isExpanded ? "less..." : "more..."}
                    </button>
                  )}
                </div>
              )
            }
            closeOnBackdropClick={false}
          >
            <div className="w-full h-full flex items-center px-8">
              <QueryBuilder ruleGroup={ruleGroup} setRuleGroup={setRuleGroup} />
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
}
