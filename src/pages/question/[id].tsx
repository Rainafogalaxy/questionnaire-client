import QuestionInput from "@/components/QuestionComponents/QuestionInput";
import QuestionRadio from "@/components/QuestionComponents/QuestionRadio";
import style from "@/styles/Question.module.scss";

type PropsType = {
  id: string;
};

export default function Question() {
  return (
    <>
      <main>
        <h1>KS</h1>
        <form action="/api/answer" method="post">
          <input type="hidden" name="questionId" />
          <div className={style.componentWrapper}>
            <QuestionInput
              fe_id="c1"
              props={{ title: "KS", placeholder: "SSS" }}
            />
          </div>
          <div className={style.componentWrapper}>
            <QuestionRadio
              fe_id="c2"
              props={{
                title: "AAA",
                options: [
                  { value: "lala", text: "say" },
                  { value: "kyungsoo", text: "star" },
                ],
                value: "kyungsoo",
                isVertical: false,
              }}
            />
          </div>

          <div className={style.submitButtonContainer}>
            {/* <input type="submit" value="提交" /> */}
            <button type="submit">提交</button>
          </div>
        </form>
      </main>
    </>
  );
}

// export async function getServerSideProps(context: any) {
//   const { ld = "" } = context.params;
//   return {
//     props: "",
//   };
// }
