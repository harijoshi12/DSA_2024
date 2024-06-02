class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(10);
const b = new Node(20);
const c = new Node(30);
const d = new Node(40);
const e = new Node(50);
const f = new Node(60);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

const u = new Node(3);
const v = new Node(6);
const w = new Node(9);

u.next = v;
v.next = w;

const print = (head) => {
  let curr = head;
  while (curr) {
    console.log(curr.val);
    curr = curr.next;
  }
};

// print(a);

const printRecr = (head) => {
  if (head == null) return;
  printRecr(head.next);
  console.log(head.val);
};
// printRecr(a);

const sum = (head) => {
  let curr = head;
  let sum = 0;
  while (curr) {
    sum += curr.val;
    curr = curr.next;
  }
  console.log(sum);
};
// sum(a);

const sumRecr = (head) => {
  if (head == null) return 0;
  return head.val + sumRecr(head.next);
};
// console.log(sumRecr(a));

const find = (head, val) => {
  let curr = head;
  while (curr) {
    if (curr.val == val) return true;
    curr = curr.next;
  }
  return false;
};

// console.log(find(a, 4));

const findRecur = (head, val) => {
  if (head == null) return false;
  if (head.val == val) return true;
  return findRecur(head.next, val);
};
// console.log(findRecur(a, 9));

const getVal = (head, idx) => {
  let curr = head;
  let i = 0;
  while (curr && i <= idx) {
    if (i == idx) {
      return curr.val;
    }
    curr = curr.next;
    i++;
  }
  return "not found";
};

// console.log(getVal(a, 7));

const getValRecur = (head, idx) => {
  if (head == null) return "not found recurr";
  if (idx == 0) return head.val;
  return getValRecur(head.next, idx - 1);
};
// console.log(getValRecur(a, 4));

const revList = (head) => {
  let curr = head;
  let prev = null;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};
// let newHead = revList(a);
// print(newHead);

const revListRecur = (head, prev = null) => {
  if (head == null) return prev;
  let next = head.next;
  head.next = prev;
  // prev = head;
  // head = next;
  // return revListRecur(head, prev);
  return revListRecur(next, head);
};
// print(revListRecur(a));

const zipperList1 = (head1, head2) => {
  let curr1 = head1,
    curr2 = head2;
  while (curr1 && curr2) {
    let temp1 = curr1.next;
    curr1.next = curr2;
    curr2 = temp1;
    curr1 = curr1.next;
  }
  return head1;
};

// print(zipperList1(u, a));

const zipperList2 = (head1, head2) => {
  let curr1 = head1;
  let curr2 = head2;
  let count = 0;
  while (curr1 && curr2) {
    if (count % 2 == 0) {
      let temp = curr1.next;
      curr1.next = curr2;
      curr1 = temp;
    } else {
      let temp = curr2.next;
      curr2.next = curr1;
      curr2 = temp;
    }
    count++;
  }
  return head1;
};
// print(zipperList2(a, u));

const zipperList3 = (head1, head2) => {
  if (head1 == null) return head2;
  if (head2 == null) return head1;
  let temp = head1.next;
  head1.next = head2;
  head2.next = zipperList3(temp, head2.next);
  return head1;
};
print(zipperList3(u, a));
