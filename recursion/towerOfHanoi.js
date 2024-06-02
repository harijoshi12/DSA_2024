const toh = (n, source, destination, temp) => {
  if (n == 1) {
    console.log(`Move disk 1 from ${source} to ${destination}`);
    return;
  }
  toh(n - 1, source, temp, destination);
  console.log(`Move disk ${n} from ${source} to ${destination}`);
  toh(n - 1, temp, destination, source);
};

toh(6, "A", "C", "B");
