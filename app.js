const domRenderElem = document.querySelector("#root");

function Button(props) {
  let buttonValue = "";
  return React.createElement(
    "button",
    {
      className:
        props.classes ||
        "font-mono bg-gray-500 hover:bg-gray-400 rounded-full p-5",
      type: "button",
      onClick: () => {
        buttonValue += props.ev;
        console.log(buttonValue);
      },
    },
    props.value
  );
}

function View() {
  return React.createElement(
    "div",
    {
      className: "bg-gray-800 border-2 border-gray-900 shadow-2xl rounded-lg",
    },
    [
      React.createElement("div", {
        className:
          "border-b-2 border-gray-900 bg-transparent p-8 rounded-t-lg outline-none focus:bg-gray-700 text-3xl text-right text-white font-mono",
      }),
      React.createElement(
        "div",
        {
          className: "p-6 text-gray-800 grid grid-cols-4 gap-4 text-xl",
        },
        [
          React.createElement(Button, {
            classes:
              "font-mono col-span-3 bg-blue-500 hover:bg-blue-400 rounded-full p-5",
            value: "c",
            ev: "Clear",
          }),
          React.createElement(Button, {
            classes:
              "font-mono bg-purple-500 hover:bg-purple-400 rounded-full p-5",
            value: "➗",
          }),
          React.createElement(Button, {
            value: "1",
          }),
          React.createElement(Button, {
            value: "2",
          }),
          React.createElement(Button, {
            value: "3",
          }),
          React.createElement(Button, {
            classes:
              "font-mono bg-purple-500 hover:bg-purple-400 rounded-full p-5",
            value: "✖️",
          }),
          React.createElement(Button, {
            value: "4",
          }),
          React.createElement(Button, {
            value: "5",
          }),
          React.createElement(Button, {
            value: "6",
          }),
          React.createElement(Button, {
            classes:
              "font-mono bg-purple-500 hover:bg-purple-400 rounded-full p-5",
            value: "➖",
          }),
          React.createElement(Button, {
            value: "7",
          }),
          React.createElement(Button, {
            value: "8",
          }),
          React.createElement(Button, {
            value: "9",
          }),
          React.createElement(Button, {
            classes:
              "font-mono bg-purple-500 hover:bg-purple-400 rounded-full p-5",
            value: "➕",
          }),
          React.createElement(Button, {
            classes: "font-mono bg-blue-500 hover:bg-blue-400 rounded-full p-5",
            value: "0",
          }),
          React.createElement(Button, {
            classes:
              "font-mono col-span-3 bg-purple-500 hover:bg-purple-400 rounded-full p-5",
            value: "=",
          }),
        ]
      ),
    ]
  );
}

ReactDOM.render(React.createElement(View), domRenderElem);
