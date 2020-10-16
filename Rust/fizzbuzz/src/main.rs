extern crate fizzbuzz;

fn main(){
    let ans = (1..=100).fold(
        format!(""), |buf, value| {
            format!("{} {}",buf, fizzbuzz::fizzbuzz(value))
        });

    println!("{}", ans);
}