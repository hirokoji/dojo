extern crate fizzbuzz;

fn main(){
    for value in 1..=100{
        println!("{}", fizzbuzz::fizzbuzz(value));
    };
}