function myNew(constructor, ...args) {
  // 步骤1: 创建一个空的对象，对象的原型为构造函数的 prototype 属性
  const obj = Object.create(constructor.prototype);
  
  // 步骤2: 将构造函数的上下文(this)绑定到新创建的对象上
  const result = constructor.apply(obj, args);
  
  // 步骤3: 如果构造函数返回了一个对象，则返回该对象，否则返回创建的新对象
  return result instanceof Object ? result : obj;
}
