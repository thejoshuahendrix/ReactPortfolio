const Article1 = (props) => {
  return (
    <div class="row">
      <div class={`column ${props.class1}`} >
          {props.text}</div>
      <div class={`column ${props.class2}`} >{props.text2}</div>
    </div>
  );
};

export default Article1;
