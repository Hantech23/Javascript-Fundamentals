function pow(x,n) {
    return x ** n
}

const body = document.querySelector('body')

const answers = document.createElement('ol')
body.append(answers)

const one = document.createElement('li')
one.textContent = pow(3,2)
answers.append(one)

const two = document.createElement('li')
two.textContent = pow(3,3)
answers.append(two)

const three = document.createElement('li')
three.textContent = pow(1,100)
answers.append(three)