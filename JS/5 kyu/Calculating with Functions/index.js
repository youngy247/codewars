function zero(operation) {
  if (operation) {
    return operation(0)
  }
  return 0
}

function one(operation) {
  if (operation) {
    return operation(1)
  }
  return 1
}

function two(operation) {
  if (operation) {
    return operation(2)
  }
  return 2
}

function three(operation) {
  if (operation) {
    return operation(3)
  }
  return 3
}

function four(operation) {
  if (operation) {
    return operation(4)
  }
  return 4
}

function five(operation) {
  if (operation) {
    return operation(5)
  }
  return 5
}

function six(operation) {
  if (operation) {
    return operation(6)
  }
  return 6
}

function seven(operation) {
  if (operation) {
    return operation(7)
  }
  return 7
}

function eight(operation) {
  if (operation) {
    return operation(8)
  }
  return 8
}

function nine(operation) {
  if (operation) {
    return operation(9)
  }
  return 9
}

function plus(rightOperand) {
  return function (leftOperand) {
    return leftOperand + rightOperand
  }
}

function minus(rightOperand) {
  return function (leftOperand) {
    return leftOperand - rightOperand
  }
}

function times(rightOperand) {
  return function (leftOperand) {
    return leftOperand * rightOperand
  }
}

function dividedBy(rightOperand) {
  return function (leftOperand) {
    return Math.floor(leftOperand / rightOperand)
  }
}
