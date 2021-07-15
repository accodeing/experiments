class TypeInfo {
  constructor({ type = 'string', hint, control = 'input', properties = {}, onChange = ( event, handler ) => handler(event.target.value) }) {
    this.type = type;
    this.hint = hint;
    this.control = control;
    this.properties = properties;
    this.onChange = onChange;
  }
}

export default TypeInfo
