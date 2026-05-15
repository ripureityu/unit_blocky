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
        { "kind": "block", "type": "logic_compare" },
        { "kind": "block",  'type': 'logic_boolean' },
        { "kind": "block", 'type': 'controls_ifelse' },
        { "kind": "block", 'type': 'logic_operation' },
        { "kind": "block", 'type': 'logic_negate' },
        { "kind": "block", 'type': 'logic_null' },
        { "kind": "block", 'type': 'logic_ternary' }
      ]
    },
    {
      "kind": "category",
      "name": "リスト",
      "colour": "230",
      "contents": [
        { "kind": "block",'type': 'lists_repeat' },
        { "kind": "block",'type': 'lists_create_empty' },
        { "kind": "block",'type': 'lists_reverse' },
        { "kind": "block",'type': 'lists_isEmpty' },
        { "kind": "block",'type': 'lists_length' }
      ]
    },
    {
      "kind": "category",
      "name": "ループ",
      "colour": "330",
      "contents": [
        { "kind": "block", 'type':'controls_repeat_ext' },
        { "kind": "block", 'type': 'controls_repeat' },
        { "kind": "block", 'type': 'controls_whileUntil' },
        { "kind": "block", 'type': 'controls_for' },
        { "kind": "block", 'type': 'controls_forEach' },
        { "kind": "block", 'type': 'controls_flow_statements' }
      ]
    },
    {"kind": "category",
      "name": "計算",
      "colour": "330",
      "contents": [
        { "kind": "block", 'type': 'math_number' },
        { "kind": "block", 'type': 'math_arithmetic' },
        { "kind": "block", 'type': 'math_single' },
        { "kind": "block", 'type': 'math_trig' },
        { "kind": "block", 'type': 'math_constant' },
        { "kind": "block", 'type': 'math_number_property' },
        {"kind": "block", 'type': 'math_change' },
        { "kind": "block", 'type': 'math_round' },
        { "kind": "block", 'type': 'math_on_list' },
        { "kind": "block", 'type': 'math_modulo' },
        { "kind": "block", 'type': 'math_constrain' },
        { "kind": "block", 'type': 'math_random_int' },
        { "kind": "block", 'type': 'math_random_float' },
        { "kind": "block", 'type': 'math_atan2' }
      ]
    }

      /*tmp
      {
      "kind": "category",
      "name": "内容名",
      "colour": "230",
      "contents": [
        { "kind": "?",'type': '?' },
      ]}
      */
    
    
    // You can add more blocks to this array.
  ]
};



// HTMLで作った空箱(#blocklyDiv)に、Blocklyを注入（表示）する
const workspace = Blockly.inject('blocklyDiv', {
  toolbox: toolbox1
});
