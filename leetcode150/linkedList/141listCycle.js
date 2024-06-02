// correct but not recommended
var hasCycle = function (head) {
  let curr = head;
  while (curr) {
    if (curr.pos) return true;
    curr.pos = true;
    curr = curr.next;
  }
  return false;
};

// correct- floye'd cycle-finding algo(tortoise and hare)
var hasCycle = function (head) {
  let slow = (fast = head);
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }
  return false;
};
let n = -Infinity;
