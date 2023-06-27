//
//  ContentView.swift
//  Memorize
//
//  Created by Harry Ellis on 26/06/23.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        HStack {
            ZStack{
                RoundedRectangle(cornerRadius: 20)
                    .stroke(lineWidth: 5)
                Text("Void")
            }
            ZStack{
                RoundedRectangle(cornerRadius: 20)
                    .stroke(lineWidth: 5)
                Text("Void")
            }
        }
        .padding()
    }
}





struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
