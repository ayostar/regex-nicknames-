import Validator from '../validator';

test.each([
  ['Otez', true],
  ['-Otez', false],
  ['Otez-', false],
  ['12Otez', false],
  ['O123tez', true],
  ['0tez', false],
  ['Just-In-Credible', true],
  ['Just-In-Credible23', false],
  ['Just=In-Credible', false],
  ['AbRaKadab____321___ra', true],
  ['Уасянапивасе', false],
  ['W', true],
  ['w', true],
  ['', false],
])(
  'Testing Validator class, method validateUsername(str)',
  (param, expected) => {
    const validStr = new Validator(param);
    const received = validStr.validateUsername();
    console.log('expected: ', expected);
    console.log('received: ', received);
    expect(expected).toBe(received);
  }
);
