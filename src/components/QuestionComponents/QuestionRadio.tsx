import React, { FC } from "react";
import style from "./QuestionRadio.module.scss";

type PropsType = {
  fe_id: string;
  props: {
    title: string;
    options: Array<{ value: string; text: string }>;
    value: string;
    isVertical: boolean;
  };
};

const QuestionInput: FC<PropsType> = ({ fe_id, props = {} }) => {
  const { title, options = [], value, isVertical } = props;
  return (
    <>
      <p>title</p>
      <ul className={style.list}>
        {options.map((opt) => {
          const { value: val, text } = opt;
          //判断竖向还是横向
          let liClassName = "";
          if (isVertical) liClassName = style.verticalItem;
          else liClassName = style.horizontalItem;

          return (
            <li key={val} className={liClassName}>
              <label htmlFor="">
                <input
                  type="radio"
                  name={fe_id}
                  value={val}
                  defaultChecked={val === value} //当前的值是否等于传入的值
                />
                {text}
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default QuestionInput;
