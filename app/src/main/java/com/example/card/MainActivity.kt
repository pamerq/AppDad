package com.example.card

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val calcuButton: Button = findViewById(R.id.calculate)
        calcuButton.setOnClickListener{

            val montoinicialEditText: EditText = findViewById(R.id.editTextMontoInicial)
            val inicilaEditText: EditText = findViewById(R.id.editTextInicial)
            val cuotasEditText: EditText = findViewById(R.id.editTextCuotas)
            val result = montoinicialEditText.text.toString().toInt() -  inicilaEditText.text.toString().toInt()


            val toast = Toast.makeText(this, result.toString(), Toast.LENGTH_SHORT)
            toast.show()


        }
    }
}