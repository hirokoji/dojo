
fn square_sum(n: isize) -> isize {
    (1..n)
        .filter(|i| i % 2 == 0)
        .map(|i| i * i)
        .sum()
}


fn main() {
    println!("{}", square_sum(10))
}
