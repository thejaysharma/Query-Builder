import React, { Fragment } from "react";
import { Button } from "../ui/button";
import ToggleSwitch from "../common/ToggleSwitch";
import InfoIMG from "@/assets/Info.svg";
import DeleteIMG from "@/assets/Delete.svg";
import DownArrowIMG from "@/assets/DownArrow.svg";
import { Rule, RuleGroup } from "../../lib/interface";
import { conditions, criterias, fields } from "@/lib/constant";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const QueryBuilder = ({ ruleGroup, setRuleGroup }) => {
  const handleAddRule = (groupIndex: number) => {
    const newRule: Rule = {
      field: undefined,
      condition: undefined,
      criteria: undefined,
      type: "rule",
    };
    const updatedGroup = { ...ruleGroup };
    (updatedGroup.children[groupIndex] as RuleGroup).children.push(newRule);
    setRuleGroup(updatedGroup);
  };

  const handleDeleteRule = (groupIndex: number, ruleIndex: number) => {
    const updatedGroup = { ...ruleGroup };
    (updatedGroup.children[groupIndex] as RuleGroup).children.splice(
      ruleIndex,
      1
    );
    setRuleGroup(updatedGroup);
  };

  const handleAddGroup = () => {
    const newGroup: RuleGroup = {
      children: [],
      conjunction: "AND",
      not: false,
      type: "rule_group",
    };
    setRuleGroup({ ...ruleGroup, children: [...ruleGroup.children, newGroup] });
  };

  // const handleFieldChange = (
  //   e: React.ChangeEvent<HTMLSelectElement>,
  //   ruleIndex: number,
  //   groupIndex: number
  // ) => {
  //   const updatedGroup = { ...ruleGroup };
  //   const rule = (updatedGroup.children[groupIndex] as RuleGroup).children[
  //     ruleIndex
  //   ] as Rule;
  //   rule.field = e.target.value as Rule["field"];
  //   setRuleGroup(updatedGroup);
  // };

  const handleFieldChange = (
    selectedField: string | undefined,
    ruleIndex: number,
    groupIndex: number
  ) => {
    const updatedGroup = { ...ruleGroup };
    const rule = (updatedGroup.children[groupIndex] as RuleGroup).children[
      ruleIndex
    ] as Rule;
    rule.field = selectedField as Rule["field"];
    setRuleGroup(updatedGroup);
  };

  const handleConditionChange = (
    selectedCondition: string | undefined,
    ruleIndex: number,
    groupIndex: number
  ) => {
    const updatedGroup = { ...ruleGroup };
    const rule = (updatedGroup.children[groupIndex] as RuleGroup).children[
      ruleIndex
    ] as Rule;
    rule.condition = selectedCondition as Rule["condition"];
    setRuleGroup(updatedGroup);
  };

  const handleCriteriaChange = (
    selectedCriteria: string | undefined,
    ruleIndex: number,
    groupIndex: number
  ) => {
    const updatedGroup = { ...ruleGroup };
    const rule = (updatedGroup.children[groupIndex] as RuleGroup).children[
      ruleIndex
    ] as Rule;
    rule.criteria = selectedCriteria as Rule["criteria"];
    setRuleGroup(updatedGroup);
  };

  const handleConjunctionChange = (
    conjunction: "AND" | "OR",
    groupIndex: number
  ) => {
    const updatedGroup = { ...ruleGroup };
    (updatedGroup.children[groupIndex] as RuleGroup).conjunction = conjunction;
    setRuleGroup(updatedGroup);
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex flex-col gap-4">
        {ruleGroup.children.map((group, groupIndex: number) => (
          <div
            key={groupIndex}
            className="bg-[#282B30] text-white border border-[#404348] w-full p-4 rounded"
          >
            <div className="flex gap-2.5 mb-8">
              <ToggleSwitch
                value={group.conjunction}
                onChange={(newConjunction) =>
                  handleConjunctionChange(newConjunction, groupIndex)
                }
              />
              <img src={InfoIMG} alt="info" />
            </div>

            {group.type === "rule_group" &&
              group.children.map((rule, ruleIndex: number) => (
                <div
                  key={ruleIndex}
                  className="flex space-x-4 mb-4 items-center"
                >
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <div
                        className={`${
                          rule.field
                            ? "bg-[#FFFFFF0D] text-white"
                            : "bg-[#FFFFFF1A] text-[#FFFFFF80]"
                        } border border-[#404348] py-2 px-3 rounded w-64 appearance-none flex justify-between`}
                      >
                        {rule.field || "Select Field"}
                        <img src={DownArrowIMG} alt="Down Arrow" />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="flex flex-col gap-1.5">
                      <DropdownMenuLabel>PREDICTION</DropdownMenuLabel>
                      {fields.map((field, ind) => (
                        <Fragment key={field}>
                          <DropdownMenuItem
                            onClick={() =>
                              handleFieldChange(field, ruleIndex, groupIndex)
                            }
                          >
                            {field}
                          </DropdownMenuItem>
                          {ind === fields.length - 2 && (
                            <DropdownMenuLabel>COMMON</DropdownMenuLabel>
                          )}
                        </Fragment>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <div
                        className={`${
                          rule.condition
                            ? "bg-[#FFFFFF0D] text-white"
                            : "bg-[#FFFFFF1A] text-[#FFFFFF80]"
                        } border border-[#404348] py-2 px-3 rounded w-64 appearance-none flex justify-between`}
                      >
                        {rule.condition || "Select Condition"}
                        <img src={DownArrowIMG} alt="Down Arrow" />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="flex flex-col gap-1.5">
                      {conditions.map((condition) => (
                        <DropdownMenuItem
                          key={condition}
                          onClick={() =>
                            handleConditionChange(
                              condition,
                              ruleIndex,
                              groupIndex
                            )
                          }
                        >
                          {condition}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <div
                        className={`${
                          rule.criteria
                            ? "bg-[#FFFFFF0D] text-white"
                            : "bg-[#FFFFFF1A] text-[#FFFFFF80]"
                        } border border-[#404348] py-2 px-3 rounded w-64 appearance-none flex justify-between`}
                      >
                        {rule.criteria || "Select Criteria"}
                        <img src={DownArrowIMG} alt="Down Arrow" />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="flex flex-col gap-1.5">
                      {criterias.map((criteria) => (
                        <DropdownMenuItem
                          key={criteria}
                          onClick={() =>
                            handleCriteriaChange(
                              criteria,
                              ruleIndex,
                              groupIndex
                            )
                          }
                        >
                          {criteria}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <button
                    onClick={() => handleDeleteRule(groupIndex, ruleIndex)}
                    className={`p-2 rounded ${
                      rule.field && rule.criteria && rule.condition
                        ? "bg-[#FFFFFF0D]"
                        : "bg-[#FFFFFF1A]"
                    } border border-[#404348]`}
                  >
                    <img src={DeleteIMG} alt="Delete"></img>
                  </button>
                </div>
              ))}
            <Button size="sm" onClick={() => handleAddRule(groupIndex)}>
              + Add filter
            </Button>
          </div>
        ))}
      </div>
      <Button size="sm" onClick={handleAddGroup} className="w-fit">
        + Add new group filter
      </Button>
    </div>
  );
};

export default QueryBuilder;
