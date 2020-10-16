extern crate fizzbuzz;

fn main(){
    for value in 1..101 {
        println!("{}", fizzbuzz::fizzbuzz(value));
    };
}