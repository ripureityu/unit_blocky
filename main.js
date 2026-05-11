// ツールボックス（左側のブロックメニュー）の設定
const toolbox1 = {
  "kind": "categoryToolbox",
  "contents": [
    {
      "kind": "category",
      "name": "論理",
      "colour": "210",
      "contents": [
        { "kind": "block", "type": "controls_if" },
        { "kind": "block", "type": "logic_compare" }
      ]
    },
    {
      "kind": "category",
      "name": "演算",
      "colour": "230",
      "contents": [
        { "kind": "block", "type": "math_number" },
        { "kind": "block", "type": "math_arithmetic" }
      ]
    },
    {'type': 'lists_create_empty'},
    {'type': 'lists_repeat' },
    {'type': 'input_value'},
    {'type': 'input_value'},
    {'type': 'lists_reverse'},
    {'type': 'input_value'},
    {'type': 'lists_isEmpty'},
    {'type': 'input_value'},
    {'type': 'lists_length'},
    {'type': 'input_value'}
    
    
    
    // You can add more blocks to this array.
  ]
};



// HTMLで作った空箱(#blocklyDiv)に、Blocklyを注入（表示）する
const workspace = Blockly.inject('blocklyDiv', {
  toolbox: toolbox1
});
