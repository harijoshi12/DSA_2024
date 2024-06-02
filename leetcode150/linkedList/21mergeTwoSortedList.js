var mergeTwoLists = function (list1, list2) {
  let curr = new ListNode();
  let dummy = curr;
  while (list1 && list2) {
    if (list1.val > list2.val) {
      dummy.next = list2;
      list2 = list2.next;
    } else {
      dummy.next = list1;
      list1 = list1.next;
    }
    dummy = dummy.next;
  }
  if (list1) {
    dummy.next = list1;
  } else {
    dummy.next = list2;
  }
  return curr.next;
};
