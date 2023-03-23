package com.example.card

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.*
import java.math.RoundingMode
import java.text.DecimalFormat

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val cuotasSpinner: Spinner = findViewById(R.id.spinnerCuotas)
        var adapterCuotas = ArrayAdapter.createFromResource(this, R.array.spinnerCuotas, android.R.layout.simple_spinner_item)
            .also { adapter ->
            // Specify the layout to use when the list of choices appears
            adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item)
            // Apply the adapter to the spinner
        }
        cuotasSpinner.setAdapter(adapterCuotas);

        val calcuButton: Button = findViewById(R.id.calculate)
        calcuButton.setOnClickListener{

            val montoinicialEditText: EditText = findViewById(R.id.editTextMontoInicial)
            val inicilaEditText: EditText = findViewById(R.id.editTextInicial)
            val cuotasSpinner: Spinner = findViewById(R.id.spinnerCuotas)

            val mapFactor = mapOf(
                "12" to 0.09104638,
                "24" to 0.04928198,
                "36" to 0.03548678,
                "48" to 0.02868259,//check
                "60" to 0.02467340,
            )

            val factor = mapFactor[cuotasSpinner.getSelectedItem().toString()]
            val result = (montoinicialEditText.text.toString().toInt() -  inicilaEditText.text.toString().toInt())*factor!!
            val df = DecimalFormat("#.##")
            df.roundingMode = RoundingMode.CEILING

            //val toast = Toast.makeText(this, result.toString(), Toast.LENGTH_SHORT)
            //toast.show()

            val resultText: TextView = findViewById(R.id.textViewResult)
            resultText.text =  df.format(result).toDouble().toString()


        }


    }
}